# How to Convert Your .blend File to .glb Format

You have a Blender file (`uploads_files_3371617_vape.blend`) that needs to be converted to GLB format for web use.

## Option 1: Using Blender (Recommended)

1. **Open Blender** (if you don't have it, download from https://www.blender.org)

2. **Open your file**:
   - File → Open → Select `uploads_files_3371617_vape.blend`

3. **Export as GLB**:
   - File → Export → glTF 2.0 (.glb/.gltf)
   - In the export settings:
     - Set Format to "glTF Binary (.glb)"
     - Check "Selected Objects" if you only want to export the vape
     - Uncheck "Selected Objects" to export everything
   - Click "Export glTF 2.0"

4. **Save the file**:
   - Save it as `vape.glb` in the `public/models/` folder

## Option 2: Online Converter (If you don't have Blender)

1. Visit: https://products.aspose.app/3d/conversion/blend-to-glb
2. Upload your `uploads_files_3371617_vape.blend` file
3. Download the converted `.glb` file
4. Rename it to `vape.glb` and place it in `public/models/` folder

## After Conversion

Once you have `vape.glb` in the `public/models/` folder, the 3D model will automatically appear on your website!

The file path should be: `/home/ali/Desktop/New Folder/public/models/vape.glb`

## Alternative: Different File Name

If your file has a different name, update the `Hero.jsx` component:
```jsx
<Vape3D modelPath="/models/your-filename.glb" />
```

