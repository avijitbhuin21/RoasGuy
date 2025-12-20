from fastapi import APIRouter
from fastapi.responses import HTMLResponse
from pathlib import Path

router = APIRouter()


def _read_cartpage_html() -> str:
    # Resolve path to components/homepage.html relative to project root
    html_path = Path(__file__).resolve().parent.parent / "components" / "cartPage.html"
    try:
        return html_path.read_text(encoding="utf-8")
    except FileNotFoundError:
        return "<html><body><h1>Cart Page not found</h1></body></html>"


@router.get("/cartpage", response_class=HTMLResponse)
async def cartPage() -> HTMLResponse:
    content = _read_cartpage_html()
    return HTMLResponse(content=content, status_code=200)