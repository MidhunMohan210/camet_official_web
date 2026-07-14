import { Link } from 'react-router-dom'

function Button({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) {
  const baseStyles = "inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-base text-center"
  
  const variants = {
    primary: "bg-white text-blue-600 hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600",
    solid: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={combinedStyles}>{children}</Link>
  }
  
  return <button type={type} className={combinedStyles} onClick={onClick}>{children}</button>
}

export default Button
