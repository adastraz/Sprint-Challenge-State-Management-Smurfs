import React, {useState} from 'react'
import {connect} from 'react-redux'
import {fetchSmurf, smurfyNew} from '../actions'
import styled from 'styled-components'

const Section = styled.section `
    display: flex;
    flex-direction: column;
`

const SmurfAdd = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.smurfyNew(newSmurf)
    }

console.log(newSmurf)
    return (
        <>
            <form onSubmit={(e => {
                handleSubmit(e)
            })}>
                <Section>
                    <label>Name
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={newSmurf.name}
                            type='text'
                            name='name'
                        />
                    </label>
                    <label>Age
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={newSmurf.age}
                            type='text'
                            name='age'
                        />
                    </label>
                    <label>Height
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={newSmurf.height}
                            type='text'
                            name='height'
                        />
                    </label>
                    <button onClick={() => props.smurfyNew(newSmurf)}>Add Smurf</button>
                </Section>
            </form>
            
            <button onClick={props.fetchSmurf}>Click Me!</button>
            {props.smurf && !props.isLoading && 
            props.smurf.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.age}</p>
                        <p>{item.height}</p>
                    </div>
                )
            })
            }
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, {fetchSmurf, smurfyNew})(SmurfAdd)