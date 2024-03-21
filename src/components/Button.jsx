function Button(props) {
  const { className = 'bg-blue-600', children, text, type = 'submit' } = props
  return (
    <button
      {...props}
      type={type}
      className={`${className} [&>svg]:w-5 [&s>svg]:h-5 [&>svg]:stroke-1  flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  )
}

export default Button
