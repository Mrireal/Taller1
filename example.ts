// Archivo de ejemplo con problemas de estilo y malas prácticas
// Este código contiene 4 problemas principales detectables por ESLint

interface User {
    name: string;
    email: string;
    age: number;
}

// ========================================
// PROBLEMA 1: Uso de 'any' sin restricción de tipo
// ========================================
// Mala práctica: elimina las ventajas del sistema de tipos de TypeScript
function processData(data: any) {
    return data.value;
}

// ========================================
// PROBLEMA 2: Inconsistencia en comillas (dobles vs simples)
// ========================================
// Se mezclan comillas dobles y simples sin consistencia
const message1 = "Hello World";
const message2 = 'Goodbye World';
const message3 = "TypeScript is great"

// ========================================
// PROBLEMA 3: Falta de punto y coma
// ========================================
// Múltiples líneas sin punto y coma al final
function createUser(name: string, email: string, age: number): User {
    const user = { name, email, age }
    return user
}

function getUserInfo(user: User): string {
    return `${user.name} - ${user.email}`
}

// ========================================
// PROBLEMA 4: Comparación con == en lugar de ===
// ========================================
// Uso de comparación débil que puede causar bugs
function isAdmin(role: string): boolean {
    return role == "admin"
}

function checkStatus(status: string): boolean {
    return status == "active"
}

// Exportación de funciones
export { createUser, processData, getUserInfo, isAdmin, checkStatus };
