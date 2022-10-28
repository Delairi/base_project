import styled from 'styled-components'

const Home = () => {
  return (
    <Content> 
        <Span>BASE PROJECT VITE, STYLED-COMPONENTS, TYPESCRIPT AND REACT-ROUTER-DOM</Span>
    </Content>
  )
}

const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
background: ${props => props.theme.colors.bg};
`

const Span = styled.span`
color: ${props => props.theme.colors.main};
font-size: 2rem;
font-weight: 600;
font-family: 'Roboto', sans-serif;
flex-wrap:wrap;
text-align:center;
margin:1em;
`

export default Home