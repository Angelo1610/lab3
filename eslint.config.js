export default [
    {
        files: ['**/*.js'],
        languajeOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',  
            
        },
        rules:{
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        }
    }
]