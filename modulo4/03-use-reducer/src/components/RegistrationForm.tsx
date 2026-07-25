import React, { useReducer } from 'react'

interface FormState {
  name: string
  lastname: string
  email: string
  password: string
  errors: Partial<Record<'name' | 'lastname' | 'email' | 'password', string>>
  status: 'idle' | 'validating' | 'submitting' | 'success' | 'error'
}

type FormAction =
  | {
      type: 'SET_FIELD'
      field: keyof Pick<FormState, 'name' | 'lastname' | 'email' | 'password'>
      value: string
    }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'SUBMIT_VALIDATING' }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' }

const INITIAL_STATE: FormState = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  errors: {},
  status: 'idle',
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      }

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      }

    case 'SUBMIT_VALIDATING':
      return {
        ...state,
        status: 'validating',
      }

    case 'SUBMIT_START':
      return {
        ...state,
        status: 'submitting',
      }

    case 'SUBMIT_SUCCESS':
      return {
        ...INITIAL_STATE,
        status: 'success',
      }

    case 'SUBMIT_ERROR':
      return {
        ...state,
        status: 'error',
      }

    case 'RESET':
      return INITIAL_STATE

    default:
      return state
  }
}

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  function validate() {
    dispatch({ type: 'SUBMIT_VALIDATING' })

    const errors: FormState['errors'] = {}

    if (!state.name.trim())
      errors.name = 'El nombre es obligatorio'

    if (!state.lastname.trim())
      errors.lastname = 'El apellido es obligatorio'

    if (!state.email.trim())
      errors.email = 'El correo es obligatorio'
    else if (!/\S+@\S+\.\S+/.test(state.email))
      errors.email = 'Correo inválido'

    if (!state.password)
      errors.password = 'La contraseña es obligatoria'
    else if (state.password.length < 6)
      errors.password = 'Debe tener al menos 6 caracteres'

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: 'SET_ERRORS',
        errors,
      })
      return false
    }

    return true
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validate()) return

    dispatch({ type: 'SUBMIT_START' })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      dispatch({
        type: 'SUBMIT_SUCCESS',
      })
    } catch {
      dispatch({
        type: 'SUBMIT_ERROR',
      })
    }
  }

  const isLoading =
    state.status === 'submitting' ||
    state.status === 'validating'

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        maxWidth: 350,
      }}
    >
      {state.status === 'success' && (
        <div
          style={{
            padding: 12,
            background: '#dcfce7',
            color: '#166534',
            borderRadius: 6,
          }}
        >
          ✅ Registro exitoso
        </div>
      )}

      {state.status === 'error' && (
        <div
          style={{
            padding: 12,
            background: '#fee2e2',
            color: '#991b1b',
            borderRadius: 6,
          }}
        >
          ❌ Ocurrió un error al registrar.
        </div>
      )}

      <div>
        <input
          placeholder="Nombre"
          value={state.name}
          disabled={isLoading}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'name',
              value: e.target.value,
            })
          }
          style={inputStyle(!!state.errors.name)}
        />
        {state.errors.name && (
          <p style={errorStyle}>{state.errors.name}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Apellido"
          value={state.lastname}
          disabled={isLoading}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'lastname',
              value: e.target.value,
            })
          }
          style={inputStyle(!!state.errors.lastname)}
        />
        {state.errors.lastname && (
          <p style={errorStyle}>{state.errors.lastname}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={state.email}
          disabled={isLoading}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'email',
              value: e.target.value,
            })
          }
          style={inputStyle(!!state.errors.email)}
        />
        {state.errors.email && (
          <p style={errorStyle}>{state.errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={state.password}
          disabled={isLoading}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'password',
              value: e.target.value,
            })
          }
          style={inputStyle(!!state.errors.password)}
        />
        {state.errors.password && (
          <p style={errorStyle}>{state.errors.password}</p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            flex: 1,
            padding: 10,
            border: 'none',
            borderRadius: 6,
            color: 'white',
            background:
              isLoading ? '#60a5fa' : '#2563eb',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {state.status === 'validating'
            ? 'Validando...'
            : state.status === 'submitting'
            ? 'Registrando...'
            : 'Registrar'}
        </button>

        <button
          type="button"
          disabled={isLoading}
          onClick={() =>
            dispatch({
              type: 'RESET',
            })
          }
          style={{
            padding: '10px 18px',
            border: 'none',
            borderRadius: 6,
            background: '#e5e7eb',
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 6,
    border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
    outline: 'none',
    boxSizing: 'border-box',
  }
}

const errorStyle: React.CSSProperties = {
  margin: '4px 0 0',
  fontSize: 12,
  color: '#ef4444',
}