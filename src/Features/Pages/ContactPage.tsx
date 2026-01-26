const ContactPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Heading: left-aligned */}
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Contact</span>
        <span className="text-accent-foreground/60 text-lg">
          Get insights of what i have build so far
        </span>
      </div>
      <div className="w-full h-px bg-accent-foreground" />
      {/* Resume: centered */}
    </div>
  )
}

export default ContactPage
