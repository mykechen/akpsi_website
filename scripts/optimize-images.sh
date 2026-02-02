#!/bin/bash

# Image Optimization Script for Alpha Zeta Website
# This script compresses PNG images and converts them to WebP format
# Prerequisites: Install sharp-cli globally: npm install -g sharp-cli

set -e

PUBLIC_DIR="$(dirname "$0")/../public"
OUTPUT_DIR="$PUBLIC_DIR/images/optimized"

echo "=== Alpha Zeta Image Optimization ==="
echo ""

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo "Installing sharp-cli..."
    npm install -g sharp-cli
fi

# Create output directories
mkdir -p "$OUTPUT_DIR/gallery"
mkdir -p "$OUTPUT_DIR/testimonials"

echo "Optimizing gallery images..."
for img in "$PUBLIC_DIR/images/gallery"/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" .png)
        # Convert to WebP with quality 80
        sharp -i "$img" -o "$OUTPUT_DIR/gallery/${filename}.webp" -- webp --quality 80
        # Also create optimized JPEG fallback
        sharp -i "$img" -o "$OUTPUT_DIR/gallery/${filename}.jpg" -- jpeg --quality 80
        echo "  Optimized: $filename"
    fi
done

echo ""
echo "Optimizing testimonial images..."
for img in "$PUBLIC_DIR/images/testimonials"/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" .png)
        # Convert to WebP with quality 80
        sharp -i "$img" -o "$OUTPUT_DIR/testimonials/${filename}.webp" -- webp --quality 80
        # Also create optimized JPEG fallback
        sharp -i "$img" -o "$OUTPUT_DIR/testimonials/${filename}.jpg" -- jpeg --quality 80
        echo "  Optimized: $filename"
    fi
done

echo ""
echo "=== Optimization Complete ==="
echo ""
echo "Optimized images saved to: $OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "1. Update your components to use the optimized images"
echo "2. Use <picture> element with WebP source and JPEG fallback"
echo "3. Example:"
echo '   <picture>'
echo '     <source srcSet="/images/optimized/gallery/img1.webp" type="image/webp" />'
echo '     <img src="/images/optimized/gallery/img1.jpg" alt="..." loading="lazy" />'
echo '   </picture>'
