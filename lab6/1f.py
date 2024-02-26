import os
from dotenv import load_dotenv

load_dotenv()
truth=os.getenv('SECRET')
print(truth)