#!/bin/sh

SO=$(uname -s)

echo "Detectando sistema operativo..."
case "$SO" in
    Linux)
        echo "Sistema: Linux"
        SUDO="sudo"
        ;;
    Darwin)
        echo "Sistema: macOS"
        SUDO=""
        ;;
    CYGWIN*|MINGW*|MSYS*|Windows_NT)
        echo "Sistema: Windows (via Git Bash / WSL)"
        SUDO=""
        ;;
    *)
        echo "Sistema operativo no reconocido: $SO"
        SUDO=""
        ;;
esac

echo "Levantando contenedores Docker..."
$SUDO docker compose up

