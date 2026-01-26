#!/bin/bash

# Video Optimization Script for Web Backgrounds
# Optimizes video for web use with multiple formats and resolutions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if input file is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: No input file provided${NC}"
    echo "Usage: $0 <input_video_file>"
    exit 1
fi

INPUT_FILE="$1"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}Error: File not found: $INPUT_FILE${NC}"
    exit 1
fi

# Get directory and filename info
INPUT_DIR=$(dirname "$INPUT_FILE")
INPUT_BASENAME=$(basename "$INPUT_FILE")
INPUT_NAME="${INPUT_BASENAME%.*}"

# Create output directory
OUTPUT_DIR="${INPUT_DIR}/optimized"
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}       Video Optimization for Web Background     ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Show original file info
ORIGINAL_SIZE=$(ls -lh "$INPUT_FILE" | awk '{print $5}')
ORIGINAL_SIZE_BYTES=$(stat -f%z "$INPUT_FILE")
echo -e "${YELLOW}Input file:${NC} $INPUT_FILE"
echo -e "${YELLOW}Original size:${NC} $ORIGINAL_SIZE"
echo ""

# Get video dimensions
VIDEO_INFO=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of csv=p=0 "$INPUT_FILE")
ORIGINAL_WIDTH=$(echo "$VIDEO_INFO" | cut -d',' -f1)
ORIGINAL_HEIGHT=$(echo "$VIDEO_INFO" | cut -d',' -f2)
DURATION=$(echo "$VIDEO_INFO" | cut -d',' -f3)
echo -e "${YELLOW}Original resolution:${NC} ${ORIGINAL_WIDTH}x${ORIGINAL_HEIGHT}"
echo -e "${YELLOW}Duration:${NC} ${DURATION}s"
echo ""

echo -e "${GREEN}Starting optimization...${NC}"
echo ""

# 1. Generate poster image from first frame
echo -e "${BLUE}[1/5]${NC} Generating poster image..."
ffmpeg -y -i "$INPUT_FILE" -vframes 1 -q:v 2 "$OUTPUT_DIR/${INPUT_NAME}-poster.jpg" 2>/dev/null
POSTER_SIZE=$(ls -lh "$OUTPUT_DIR/${INPUT_NAME}-poster.jpg" | awk '{print $5}')
echo -e "      ${GREEN}✓${NC} Poster: ${INPUT_NAME}-poster.jpg (${POSTER_SIZE})"

# 2. Create optimized 1080p MP4 (H.264)
echo -e "${BLUE}[2/5]${NC} Creating 1080p MP4 (H.264, CRF 28)..."
ffmpeg -y -i "$INPUT_FILE" \
    -vf "scale='min(1920,iw)':'-2'" \
    -r 24 \
    -c:v libx264 \
    -crf 28 \
    -preset slow \
    -profile:v main \
    -movflags +faststart \
    -an \
    "$OUTPUT_DIR/${INPUT_NAME}-1080p.mp4" 2>/dev/null
MP4_1080_SIZE=$(ls -lh "$OUTPUT_DIR/${INPUT_NAME}-1080p.mp4" | awk '{print $5}')
echo -e "      ${GREEN}✓${NC} ${INPUT_NAME}-1080p.mp4 (${MP4_1080_SIZE})"

# 3. Create optimized 720p MP4 (H.264) for mobile
echo -e "${BLUE}[3/5]${NC} Creating 720p MP4 for mobile (H.264, CRF 28)..."
ffmpeg -y -i "$INPUT_FILE" \
    -vf "scale='min(1280,iw)':'-2'" \
    -r 24 \
    -c:v libx264 \
    -crf 28 \
    -preset slow \
    -profile:v main \
    -movflags +faststart \
    -an \
    "$OUTPUT_DIR/${INPUT_NAME}-720p.mp4" 2>/dev/null
MP4_720_SIZE=$(ls -lh "$OUTPUT_DIR/${INPUT_NAME}-720p.mp4" | awk '{print $5}')
echo -e "      ${GREEN}✓${NC} ${INPUT_NAME}-720p.mp4 (${MP4_720_SIZE})"

# 4. Create 1080p WebM (VP9) for better compression
echo -e "${BLUE}[4/5]${NC} Creating 1080p WebM (VP9) - this may take a while..."
ffmpeg -y -i "$INPUT_FILE" \
    -vf "scale='min(1920,iw)':'-2'" \
    -r 24 \
    -c:v libvpx-vp9 \
    -crf 32 \
    -b:v 0 \
    -deadline good \
    -cpu-used 2 \
    -row-mt 1 \
    -an \
    "$OUTPUT_DIR/${INPUT_NAME}-1080p.webm" 2>/dev/null
WEBM_1080_SIZE=$(ls -lh "$OUTPUT_DIR/${INPUT_NAME}-1080p.webm" | awk '{print $5}')
echo -e "      ${GREEN}✓${NC} ${INPUT_NAME}-1080p.webm (${WEBM_1080_SIZE})"

# 5. Create 720p WebM (VP9) for mobile
echo -e "${BLUE}[5/5]${NC} Creating 720p WebM for mobile (VP9)..."
ffmpeg -y -i "$INPUT_FILE" \
    -vf "scale='min(1280,iw)':'-2'" \
    -r 24 \
    -c:v libvpx-vp9 \
    -crf 34 \
    -b:v 0 \
    -deadline good \
    -cpu-used 2 \
    -row-mt 1 \
    -an \
    "$OUTPUT_DIR/${INPUT_NAME}-720p.webm" 2>/dev/null
WEBM_720_SIZE=$(ls -lh "$OUTPUT_DIR/${INPUT_NAME}-720p.webm" | awk '{print $5}')
echo -e "      ${GREEN}✓${NC} ${INPUT_NAME}-720p.webm (${WEBM_720_SIZE})"

echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}           Optimization Complete!               ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo -e "${YELLOW}Summary:${NC}"
echo ""
printf "%-30s %10s\n" "File" "Size"
echo "----------------------------------------"
printf "%-30s %10s\n" "Original (${INPUT_BASENAME})" "$ORIGINAL_SIZE"
echo "----------------------------------------"
printf "%-30s %10s\n" "${INPUT_NAME}-poster.jpg" "$POSTER_SIZE"
printf "%-30s %10s\n" "${INPUT_NAME}-1080p.mp4" "$MP4_1080_SIZE"
printf "%-30s %10s\n" "${INPUT_NAME}-720p.mp4" "$MP4_720_SIZE"
printf "%-30s %10s\n" "${INPUT_NAME}-1080p.webm" "$WEBM_1080_SIZE"
printf "%-30s %10s\n" "${INPUT_NAME}-720p.webm" "$WEBM_720_SIZE"
echo ""

# Calculate total size of optimized files
TOTAL_OPTIMIZED=$(du -ch "$OUTPUT_DIR"/* | grep total | awk '{print $1}')
echo -e "${YELLOW}Total optimized files:${NC} $TOTAL_OPTIMIZED"
echo -e "${YELLOW}Output directory:${NC} $OUTPUT_DIR"
echo ""
echo -e "${GREEN}Files are ready for web use!${NC}"
