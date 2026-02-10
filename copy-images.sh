#!/bin/bash

# Copy uploaded images to public/images directory
# Run this from the wedding-site directory

echo "Copying uploaded images to public/images..."

# Create directory if it doesn't exist
mkdir -p public/images

# Copy images
cp ~/.gemini/antigravity/brain/6bb50097-7715-4acb-b16f-db9d40d7e236/uploaded_media_0_1770046372118.jpg public/images/hero.jpg
cp ~/.gemini/antigravity/brain/6bb50097-7715-4acb-b16f-db9d40d7e236/uploaded_media_1_1770046372118.jpg public/images/preview-1.jpg
cp ~/.gemini/antigravity/brain/6bb50097-7715-4acb-b16f-db9d40d7e236/uploaded_media_2_1770046372118.jpg public/images/preview-2.jpg
cp ~/.gemini/antigravity/brain/6bb50097-7715-4acb-b16f-db9d40d7e236/uploaded_media_3_1770046372118.png public/images/preview-3.jpg
cp ~/.gemini/antigravity/brain/6bb50097-7715-4acb-b16f-db9d40d7e236/uploaded_media_4_1770046372118.jpg public/images/preview-4.jpg

echo "✅ Images copied successfully!"
echo ""
echo "Image mapping:"
echo "  - hero.jpg (couple at European villa)"
echo "  - preview-1.jpg (couple in ornate interior)"
echo "  - preview-2.jpg (groom portrait)"
echo "  - preview-3.jpg (couple with bouquet, blue sky)"
echo "  - preview-4.jpg (bride on staircase, B&W)"
