import HeaderComponent from './components/HeaderComponent'
import BodyComponent   from './components/BodyComponent'

import { AppContainer } from './style'

const App = () => {
    return (
        <AppContainer>
            <HeaderComponent />
            <BodyComponent />
        </AppContainer>
    )
}

export default App
