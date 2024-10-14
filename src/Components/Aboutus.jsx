import React,{useEffect} from 'react'

export default function Aboutus() {
    useEffect(() => {
        document.title = "KhaLo | About us";
      }, []);
    
      const sectionStyle = {
        backgroundColor: "rbg(26,26,26)",
        padding: "130px 0",
        textAlign: "center",
      };
    
      const headingStyle = {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#f7f7f7",
        marginBottom: "20px",
      };
    
      const paragraphStyle = {
        fontSize: "18px",
        color: "#bdb4b4",
        lineHeight: "1.6",
        marginBottom: "15px",
        maxWidth: "800px",
        margin: "0 auto",
      };
    
      const strongTextStyle = {
        fontWeight: "bold",
        color: "#f7f3f3",
      };
    
      return (
        <>
      
          <section style={sectionStyle}>
            <div>
              <h2 style={headingStyle}>About Us</h2>
              <p style={paragraphStyle}>
                Welcome to <strong style={strongTextStyle}>KhaLo</strong>, your
                one-stop destination for delicious and customizable pizzas,
                mouthwatering burgers, and irresistible cakes! We are passionate
                about serving fresh, quality food that satisfies your cravings.
              </p>
              <p style={paragraphStyle}>
                Whether you're in the mood for a cheesy pizza with your favorite
                toppings, a juicy burger with all the fixings, or a decadent cake to
                celebrate any occasion, we've got you covered! Our easy-to-use
                platform lets you choose from a wide variety of options, ensuring
                that your meal is exactly how you want it.
              </p>
              <p style={paragraphStyle}>
                At <strong style={strongTextStyle}>KhaLo</strong>, we believe that
                great food brings people together, and we are committed to
                delivering that experience right to your door. Order now and enjoy a
                delightful meal crafted just for you!
              </p>
            </div>
          </section>
        </>
      );
    
}
