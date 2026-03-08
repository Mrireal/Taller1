# Taller N° 1 - Linters y Formatters
## TypeScript con ESLint y Prettier

### Herramientas Utilizadas
- **Lenguaje**: TypeScript
- **Linter**: ESLint con plugin @typescript-eslint
- **Formatter**: Prettier

---

## 🔍 Problemas Detectados por el Linter

### **PROBLEMA 1: Uso de `any` sin Restricción de Tipo**
**Regla**: `@typescript-eslint/no-explicit-any`  
**Ubicación**: Línea 13  
**Código Problemático**:
```typescript
function processData(data: any) {
    return data.value;
}
```
**Descripción**: El uso de `any` elimina las ventajas del sistema de tipos de TypeScript, permitiendo cualquier tipo de dato sin verificación en tiempo de compilación.  
**Solución**: Definir tipos específicos o usar genéricos para mantener la seguridad de tipos.

---

### **PROBLEMA 2: Inconsistencia en Comillas**
**Regla**: `quotes`  
**Ubicación**: Líneas 21-23  
**Código Problemático**:
```typescript
const message1 = "Hello World";        // Comillas dobles
const message2 = 'Goodbye World';      // Comillas simples
const message3 = "TypeScript is great" // Comillas dobles
```
**Descripción**: El código mezcla comillas simples y dobles sin un estándar consistente, lo que dificulta la legibilidad y mantenibilidad.  
**Solución**: Prettier convierte automáticamente todas las comillas a comillas simples según la configuración.

---

### **PROBLEMA 3: Falta de Punto y Coma**
**Regla**: `semi`  
**Ubicación**: Líneas 30, 31, 35  
**Código Problemático**:
```typescript
const user = { name, email, age }    // Sin punto y coma
return user                          // Sin punto y coma

return `${user.name} - ${user.email}`  // Sin punto y coma
```
**Descripción**: La ausencia de punto y coma al final de las declaraciones puede causar problemas con la inserción automática de punto y coma (ASI) de JavaScript.  
**Solución**: Prettier agrega automáticamente punto y coma al final de cada declaración.

---

### **PROBLEMA 4: Comparación con `==` en lugar de `===`**
**Regla**: `eqeqeq`  
**Ubicación**: Líneas 42, 46  
**Código Problemático**:
```typescript
function isAdmin(role: string): boolean {
    return role == "admin"    // Comparación débil
}

function checkStatus(status: string): boolean {
    return status == "active"  // Comparación débil
}
```
**Descripción**: El operador `==` realiza coerción de tipos, lo que puede causar comportamientos inesperados. Es una fuente común de bugs.  
**Solución**: Usar siempre `===` para comparación estricta sin coerción de tipos.

---

## Reglas Personalizadas Configuradas

### **REGLA PERSONALIZADA 1: Prohibir el uso de `any`**
```json
"@typescript-eslint/no-explicit-any": "error"
```
**Propósito**: Fuerza el uso de tipos específicos para mantener la seguridad de tipos que ofrece TypeScript.  
**Nivel**: Error (detiene la compilación si se encuentra)

---

### **REGLA PERSONALIZADA 2: Exigir punto y coma**
```json
"semi": ["error", "always"]
```
**Propósito**: Requiere punto y coma al final de cada declaración para evitar problemas con ASI (Automatic Semicolon Insertion).  
**Nivel**: Error

---

### **REGLA PERSONALIZADA 3: Exigir comillas simples**
```json
"quotes": ["error", "single", { "avoidEscape": true }]
```
**Propósito**: Estandariza el uso de comillas simples en todo el código base para mantener consistencia.  
**Nivel**: Error

---

## Instrucciones de Uso

### Instalación de Dependencias
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
```

### Ejecutar el Linter (ESLint)
```bash
npx eslint example.ts
```

**Salida esperada**: ESLint detectará los 4 problemas configurados.

### Ejecutar el Formatter (Prettier)
```bash
npx prettier --write example.ts
```

**Resultado**: Prettier corregirá automáticamente:
- Las comillas (todas a simples)
- Los puntos y coma faltantes
- El formato y espaciado general

### Ejecutar Linter con corrección automática
```bash
npx eslint example.ts --fix
```

---

## Resultados de la Validación

### Antes de ejecutar las herramientas:
- 1 uso de `any` sin tipo específico
- 3 inconsistencias en el uso de comillas
- 3 líneas sin punto y coma
- 2 comparaciones con `==` en lugar de `===`

### Después de ejecutar Prettier:
- Todas las comillas convertidas a simples
- Puntos y coma agregados automáticamente
- Formato y espaciado normalizado

### Problemas que requieren corrección manual:
- Uso de `any` (requiere definir tipos apropiados)
- Comparaciones con `==` (deben cambiarse a `===`)

---

## Archivos Incluidos

1. `example.ts` - Código fuente con 4 problemas detectables
2. `.eslintrc.json` - Configuración de ESLint con 3 reglas personalizadas
3. `.prettierrc.json` - Configuración de Prettier
4. `config.yaml` - Metadatos del taller
5. `README.md` - Documentación completa
6. `package.json` - Dependencias y scripts NPM

---

**Estudiante**: Israel González  
**Curso**: Ingeniería Civil en Informática  
**Asignatura**: Aplicaciones y Tecnologías Web  
**Fecha**: 06/03/2026
