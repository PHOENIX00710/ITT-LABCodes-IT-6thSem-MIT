def merge_files(file1_path, file2_path, merged_file_path):
    # Read content from first file
    with open(file1_path, 'r') as file1:
        content_file1 = file1.readlines()
    
    # Read content from second file
    with open(file2_path, 'r') as file2:
        content_file2 = file2.readlines()
    
    # Merge content from both files
    merged_content = content_file1 + content_file2
    
    # Write merged content into the third file
    with open(merged_file_path, 'w') as merged_file:
        merged_file.writelines(merged_content)

# Paths to the input files and the output file
file1_path = 'lab6/file1.txt'
file2_path = 'lab6/file2.txt'
merged_file_path = 'lab6/merged_file.txt'

# Call the function to merge files
merge_files(file1_path, file2_path, merged_file_path)

print("Files merged successfully.")
