"""Refresh the inline website script's Content Security Policy hash."""
import base64
import hashlib
from pathlib import Path
import re

page = Path(__file__).resolve().parents[1] / 'index.html'
html = page.read_text(encoding='utf-8')
scripts = re.findall(r'<script>(.*?)</script>', html, re.S)
if len(scripts) != 1:
    raise SystemExit('Expected one inline website script.')
digest = base64.b64encode(hashlib.sha256(scripts[0].encode()).digest()).decode()
html, count = re.subn(r"script-src 'sha256-[^']+'", "script-src 'sha256-" + digest + "'", html)
if count != 1:
    raise SystemExit('Expected one CSP script-src hash.')
page.write_text(html, encoding='utf-8')
print('Website script hash updated.')
