import { extend } from 'vee-validate'
import { required, email, numeric, min } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'Por favor, informe um e-mail válido'
})

extend('required', {
  ...required,
  message: 'Por favor, preencha o campo'
})

extend('numeric', {
  ...numeric,
  message: 'Por favor, informe apenas números'
})

extend('min', {
  ...min,
  message: (_, { length }) =>
    'O campo deve ter no mínimo ' + length + ' carcteres'
})
