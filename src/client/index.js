import formHandler from './js/formHandler'
import { validateInput } from './js/validateInput'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'

const handleSubmit = formHandler.handleSubmit
const fetchData = formHandler.fetchData

export {
    handleSubmit,
    fetchData,
    validateInput
}
