export function LoginForm() {
    return [
        {
            section: 'Inicio de sesión',
            validate: 2,
            target: ['login'],
            questions: [
                {
                    title: 'Correo electrónico',
                    type: 'email',
                    name: 'email',
                    placeholder: "Ingresa tu correo electrónico"
                },
                {
                    title: 'Contraseña',
                    type: 'password',
                    name: 'clave',
                    placeholder: "Ingresa tu contraseña"
                }
            ]
        }
    ];
}
