type PhilosophyItem = {
  description: string
}

const philosophyItems: PhilosophyItem[] = [
  {
    description: "In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence."
  },
  {
    description: "That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership."
  },
  {
    description: "In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being."
  }
];

const Philosophy = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 mx-auto">
      <div className="space-y-4 mb-12 text-center">
        <p className="text-[12px] font-regular text-foreground/70">Philosophy</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium">We believe:</h2>
      </div>

      {/* Single column for all screen sizes */}
      <div className="space-y-6 md:space-y-8">
        {philosophyItems.map((item, index) => (
          <div key={index} className="bg-card rounded-2xl p-8 md:p-12 lg:p-16 max-w-[327px] md:max-w-[720px] lg:max-w-[980px] mx-auto">
            <p className="text-card-foreground text-[30px] font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Philosophy;
