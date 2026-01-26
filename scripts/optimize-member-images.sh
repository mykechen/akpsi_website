#!/bin/bash

# Member Image Optimization Script
# Resizes, converts to WebP, and generates blur placeholders

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
INPUT_DIR="${1:-public/images/members}"
OUTPUT_DIR="${INPUT_DIR}/optimized"
MAX_WIDTH=400
BLUR_WIDTH=20
QUALITY=80
WEBP_QUALITY=75

# Check for required tools
check_dependencies() {
    local missing=()

    if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
        missing+=("imagemagick")
    fi

    if ! command -v cwebp &> /dev/null; then
        missing+=("webp")
    fi

    if [ ${#missing[@]} -gt 0 ]; then
        echo -e "${RED}Missing dependencies: ${missing[*]}${NC}"
        echo "Install with: brew install ${missing[*]}"
        exit 1
    fi
}

check_dependencies

# Create output directories
mkdir -p "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR/blur"
mkdir -p "$OUTPUT_DIR/webp"
mkdir -p "$OUTPUT_DIR/jpg"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}     Member Image Optimization Script           ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Get original total size
ORIGINAL_SIZE=$(du -sh "$INPUT_DIR" | cut -f1)
echo -e "${YELLOW}Input directory:${NC} $INPUT_DIR"
echo -e "${YELLOW}Original total size:${NC} $ORIGINAL_SIZE"
echo ""

# Build list of images
IMAGES=()
while IFS= read -r -d '' file; do
    IMAGES+=("$file")
done < <(find "$INPUT_DIR" -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

IMAGE_COUNT=${#IMAGES[@]}
echo -e "${YELLOW}Images to process:${NC} $IMAGE_COUNT"
echo ""

PROCESSED=0

# Process each image
for img in "${IMAGES[@]}"; do
    FILENAME=$(basename "$img")
    NAME="${FILENAME%.*}"

    # Skip the "members.png" file if it's a group photo
    if [[ "$NAME" == "members" ]]; then
        echo -e "  ${YELLOW}⊘${NC} Skipping $FILENAME (group photo)"
        continue
    fi

    PROCESSED=$((PROCESSED + 1))
    echo -e "${BLUE}[$PROCESSED/$IMAGE_COUNT]${NC} Processing $FILENAME..."

    # 1. Create optimized JPG (resized)
    # IMPORTANT: -auto-orient MUST come before -strip to fix EXIF rotation
    magick "$img" \
        -auto-orient \
        -resize "${MAX_WIDTH}x${MAX_WIDTH}>" \
        -strip \
        -quality $QUALITY \
        -sampling-factor 4:2:0 \
        -interlace Plane \
        "$OUTPUT_DIR/jpg/${NAME}.jpg" 2>/dev/null || \
    convert "$img" \
        -auto-orient \
        -resize "${MAX_WIDTH}x${MAX_WIDTH}>" \
        -strip \
        -quality $QUALITY \
        -sampling-factor 4:2:0 \
        -interlace Plane \
        "$OUTPUT_DIR/jpg/${NAME}.jpg" 2>/dev/null

    # 2. Create WebP version (use the correctly oriented JPG as source)
    cwebp -q $WEBP_QUALITY "$OUTPUT_DIR/jpg/${NAME}.jpg" -o "$OUTPUT_DIR/webp/${NAME}.webp" 2>/dev/null

    # 3. Create tiny blur placeholder (base64-ready)
    # Use -auto-orient here too
    magick "$img" \
        -auto-orient \
        -resize "${BLUR_WIDTH}x${BLUR_WIDTH}>" \
        -blur 0x2 \
        -quality 20 \
        "$OUTPUT_DIR/blur/${NAME}.jpg" 2>/dev/null || \
    convert "$img" \
        -auto-orient \
        -resize "${BLUR_WIDTH}x${BLUR_WIDTH}>" \
        -blur 0x2 \
        -quality 20 \
        "$OUTPUT_DIR/blur/${NAME}.jpg" 2>/dev/null

    # Get sizes
    ORIG_SIZE=$(ls -lh "$img" | awk '{print $5}')
    JPG_SIZE=$(ls -lh "$OUTPUT_DIR/jpg/${NAME}.jpg" | awk '{print $5}')
    WEBP_SIZE=$(ls -lh "$OUTPUT_DIR/webp/${NAME}.webp" | awk '{print $5}')
    BLUR_SIZE=$(ls -lh "$OUTPUT_DIR/blur/${NAME}.jpg" | awk '{print $5}')

    echo -e "      Original: $ORIG_SIZE → JPG: $JPG_SIZE, WebP: $WEBP_SIZE, Blur: $BLUR_SIZE"
done

echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}           Optimization Complete!               ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Calculate new sizes
JPG_TOTAL=$(du -sh "$OUTPUT_DIR/jpg" 2>/dev/null | cut -f1)
WEBP_TOTAL=$(du -sh "$OUTPUT_DIR/webp" 2>/dev/null | cut -f1)
BLUR_TOTAL=$(du -sh "$OUTPUT_DIR/blur" 2>/dev/null | cut -f1)
ALL_OPTIMIZED=$(du -sh "$OUTPUT_DIR" 2>/dev/null | cut -f1)

echo -e "${YELLOW}Summary:${NC}"
echo ""
printf "%-25s %10s\n" "Category" "Size"
echo "-----------------------------------"
printf "%-25s %10s\n" "Original images" "$ORIGINAL_SIZE"
echo "-----------------------------------"
printf "%-25s %10s\n" "Optimized JPG (${MAX_WIDTH}px)" "$JPG_TOTAL"
printf "%-25s %10s\n" "WebP versions" "$WEBP_TOTAL"
printf "%-25s %10s\n" "Blur placeholders" "$BLUR_TOTAL"
echo "-----------------------------------"
printf "%-25s %10s\n" "Total optimized" "$ALL_OPTIMIZED"
echo ""

echo -e "${YELLOW}Output directory:${NC} $OUTPUT_DIR"
echo ""

# Generate blur data JSON for use in component
echo -e "${BLUE}Generating blur placeholder data...${NC}"

BLUR_JSON="$OUTPUT_DIR/blur-data.json"
echo "{" > "$BLUR_JSON"

FIRST=true
for blur in "$OUTPUT_DIR/blur"/*.jpg; do
    [ -f "$blur" ] || continue
    NAME=$(basename "$blur" .jpg)
    BASE64=$(base64 -i "$blur" | tr -d '\n')

    if [ "$FIRST" = true ]; then
        FIRST=false
    else
        echo "," >> "$BLUR_JSON"
    fi

    printf '  "%s": "data:image/jpeg;base64,%s"' "$NAME" "$BASE64" >> "$BLUR_JSON"
done

echo "" >> "$BLUR_JSON"
echo "}" >> "$BLUR_JSON"

echo -e "${GREEN}✓${NC} Generated blur-data.json with base64 placeholders"
echo ""
echo -e "${GREEN}Files are ready for web use!${NC}"
