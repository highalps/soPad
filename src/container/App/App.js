/* */
import React from 'react'

/* */
import Directory from '../../component/Directory/Directory'
import Editor from '../../component/Editor/Editor'
import styles from './App.scss'

class App extends React.Component {

    render() {
        return (
            <div className={styles.wrapper}>
               <Directory />
               <Editor />
            </div>
        )
    }
}

export default App
