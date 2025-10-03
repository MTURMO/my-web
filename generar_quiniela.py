# generar_quiniela.py

partidos = [
    {"local": "Equipo A", "visitante": "Equipo B"},
    {"local": "Equipo C", "visitante": "Equipo D"},
]

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Quiniela</title>
</head>
<body>
<h1>Quiniela</h1>
<form id="quinielaForm">
"""

for i, partido in enumerate(partidos, 1):
    html_content += f"<p>Partido {i}: {partido['local']} vs {partido['visitante']}</p>\n"
    html_content += f"""
    <label><input type="radio" name="partido{i}" value="local" required>{partido['local']}</label>
    <label><input type="radio" name="partido{i}" value="empate" required>Empate</label>
    <label><input type="radio" name="partido{i}" value="visitante" required>{partido['visitante']}</label>
    <br><br>
    """

html_content += """
<button type="submit">Enviar Quiniela</button>
</form>
</body>
</html>
"""

with open("quiniela.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("HTML de la quiniela generado: quiniela.html")
