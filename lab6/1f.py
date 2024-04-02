import os

environment_variables = os.environ
for key, value in environment_variables.items():
    print(f"{key}: {value}")
