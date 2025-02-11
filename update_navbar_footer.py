import os
import re

## UPDATE NAV BAR ##

# Get the folder where the script is located
script_directory = os.path.dirname(os.path.abspath(__file__))

# Read the navbar content from navbar.txt (assumed to be in the same directory)
navbar_file = os.path.join(script_directory, "navbar.txt")
with open(navbar_file, "r", encoding="utf-8") as f:
    new_navbar = f.read().strip()

# Define the pattern to replace the existing navbar
navbar_pattern = re.compile(r"<!-- START NAVBAR -->.*?<!-- END NAVBAR -->", re.DOTALL)

# Iterate through all HTML files in the script's directory
for filename in os.listdir(script_directory):
    if filename.endswith(".html"):
        file_path = os.path.join(script_directory, filename)

        # Read the HTML content
        with open(file_path, "r", encoding="utf-8") as f:
            html_content = f.read()

        # Replace the header content
        updated_content = re.sub(
            navbar_pattern,
            f"<!-- START NAVBAR -->\n{new_navbar}\n<!-- END NAVBAR -->",
            html_content,
        )

        # Write the updated content back to the file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(updated_content)

        print(f"Updated navbar in {filename}")

print("Navbar update completed for all HTML files.")


## UPDATE FOOTER ##

# Get the folder where the script is located
script_directory = os.path.dirname(os.path.abspath(__file__))

# Read the footer content from footer.txt (assumed to be in the same directory)
footer_file = os.path.join(script_directory, "footer.txt")
with open(footer_file, "r", encoding="utf-8") as f:
    new_footer = f.read().strip()

# Define the pattern to replace the existing footer
footer_pattern = re.compile(r"<!-- START FOOTER -->.*?<!-- END FOOTER -->", re.DOTALL)

# Iterate through all HTML files in the script's directory
for filename in os.listdir(script_directory):
    if filename.endswith(".html"):
        file_path = os.path.join(script_directory, filename)

        # Read the HTML content
        with open(file_path, "r", encoding="utf-8") as f:
            html_content = f.read()

        # Replace the footer content
        updated_content = re.sub(
            footer_pattern,
            f"<!-- START FOOTER -->\n{new_footer}\n<!-- END FOOTER -->",
            html_content,
        )

        # Write the updated content back to the file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(updated_content)

        print(f"Updated footer in {filename}")

print("Footer update completed for all HTML files.")