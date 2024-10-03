
import { useState, useEffect } from "react";
// import Typist from "react-typist";



// const TextLoop = () => {
//   const messages = ["a software developer 🖥️", "a passionate cook 👨‍🍳", "excited to meet you! 😁"];

//   const colors = ["#E4a657", "#A3E5FF", "#A3FFAA"];
//   const [message, setMessage] = useState(messages[0]);
//   const [color, setColor] = useState(colors[0]);
//   const [typing, setTyping] = useState(true);

//   useEffect(() => {
//       setTyping(true);
//   }, [typing]);

//   const repeatText = () => {
//       setTyping(false);
//       let index = messages.indexOf(message);
//       if (index >= messages.length - 1) {
//       index = -1;
//   }
//   setMessage(messages[index + 1]);
//   setColor(colors[index + 1]);
//   };

//   return (
//       <div>
//       {typing ? (
//           <Typist
//           cursor={{ show: false }}
//           onTypingDone={() => {
//               repeatText();
//           }}
//           stdTypingDelay={1}
//           className="typist"
//       >
//           <h2 style={{ color: color }}>
//               {message}
//           </h2>
//           <Typist.Backspace count={message.length} delay={1000} />
//       </Typist>
//       ) : (
//           <h2 className={color}>{message}</h2>
//       )}
//       </div>
//   );
//   };

export default function Hero() {
  return (
    <section className='mx-container relative mb-8 lg:mb-14 3xl:mb-24'>
      <h1 className='transition-300 mb-4 text-2xl font-semibold leading-[1.5] text-black dark:text-beige 3xs:mb-5 3xs:text-3xl xs:text-4xl sm:mb-7 sm:text-5xl md:text-7xl lg:text-8xl xl:mb-10 xl:text-10xl 2xl:text-13xl 3xl:text-15xl'>
        <div>
          Hi. I&apos;m{' '}
          <span>
            Pranav Varma
          </span>
          .
        </div>
        </h1>
        <h2 className='transition-300 mb-4 text-2xl font-semibold leading-[1.5] text-black dark:text-beige 3xs:mb-5 3xs:text-3xl xs:text-4xl sm:mb-7 sm:text-5xl md:text-7xl lg:text-6xl xl:mb-10 xl:text-8xl 2xl:text-11xl 3xl:text-13xl'>
        <div>
          Aspiring{' '}
          <span>
            Software Developer{'\n'} 
          </span>
          {/* <TextLoop></TextLoop> */}
          <br/>
           {'\n'}and{' '}
          <span>
            artist
          </span>{' '}
          .
        </div>
      </h2>
      <p className='max-w-[720px] font-[450] leading-loose text-black dark:text-purple2 xs:text-lg sm:text-xl xl:max-w-[931px] 2xl:text-2xl'>
        Currently, I&apos;m studying Computer Science @&nbsp;
        <span className='gradient-text dark-uwaterloo-gradient dark:light-uwaterloo-gradient'>
          Western University
        </span>
        &nbsp;and most recently, I worked as a Software Engineer @&nbsp;
        {/* <span className='gradient-text dark-td-gradient dark:light-td-gradient'>
          Google  
        </span> */}
        <span>
  <span style={{ color: '#4285F4' }}>Google</span>
</span>

        &nbsp;through the STEP program. Here&apos;s some of my work.
      </p>
      <br/>
      <br/>
      <br/>

    </section>
  );
}
