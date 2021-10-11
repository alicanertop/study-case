import './footer.scss'

interface Props {}

function Footer({}: Props) {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Market</p>
      <p className="seperator">•</p>
      <p>Privacy Policy</p>
    </div>
  )
}

export default Footer
