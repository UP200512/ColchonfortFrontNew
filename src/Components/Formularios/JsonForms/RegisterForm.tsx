export function RegisterForm() {
    return [
        {
            section: 'Registro',
            validate: 2,
            target: ['register'],
            questions: [
                {
                    title: 'Nombre',
                    type: 'text',
                    name: 'nombre',
                    placeholder: "Ingresa tu nombre"
                },
                {
                    title: 'Apellido Paterno',
                    type: 'text',
                    name: 'apellido_paterno',
                    placeholder: "Ingresa tu apellido paterno"
                },
                {
                    title: 'Apellido Materno',
                    type: 'text',
                    name: 'apellido_materno',
                    placeholder: "Ingresa tu apellido materno"
                },
                {
                    title: 'Correo electrónico',
                    type: 'email',
                    name: 'email',
                    placeholder: "Ingresa tu correo electrónico"
                },
                {
                    title: 'Contraseña',
                    type: 'password',
                    name: 'password',
                    placeholder: "Ingresa tu contraseña"
                },
                {
                    title: 'Confirmar contraseña',
                    type: 'password',
                    name: 'password_validate',
                    placeholder: "Confirma tu contraseña",
                    equalTo: 'password'
                },
                {
                    title: 'Dirección',
                    type: 'text',
                    name: 'direccion',
                    placeholder: "Ingresa tu dirección"
                },
                {
                    title: 'Teléfono',
                    type: 'number',
                    name: 'telefono',
                    placeholder: "Ingresa tu número de teléfono"
                }
            ]
        }
    ];
}
