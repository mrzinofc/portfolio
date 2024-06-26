import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ 'Desenvolvedor Web', 'Web Designer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()    
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

        setText(updateText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === '') {
            setLoopNum(loopNum +1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="inicio">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo ao meu Portfolio</span>
                        <h1>{`Olá, sou `}<span className="wrap"> {text}</span></h1>
                        <p>Apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web utilizando React. Estou constantemente buscando aprender novas tecnologias e aprimorar minhas habilidades para criar soluções eficientes e inovadoras. Atualmente, estou focado em aprimorar meu conhecimento em front-end e melhorar minhas habilidades em design responsivo e interfaces de usuário.</p>
                        <button onClick={() => console.log('connect')}>Vamos nos conectar <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}