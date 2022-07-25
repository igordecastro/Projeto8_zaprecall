function Footer({count, cards}) {
    return (
        <footer>
            <p>{`${count}/${cards.length}`} CONCLUÍDOS</p>
        </footer>
    )
}

export default Footer;