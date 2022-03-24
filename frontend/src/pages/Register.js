import React from "react";
import styled from "styled-components";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   padding: 20px;
//   width: 40%;
//   background-color: white;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0 0;
//   padding: 0.5rem;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

const Register = () => {
  const containerStyles = {
    // justifyContent: "center",
    // alignItems: "center",
    height: "100vh",
    background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center`,
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={containerStyles}
    >
      <div className="bg-light w-50 p-5 text-center">
        <h1>Create An Account</h1>
        <form className="mx-auto">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confim Password" />
          <div>
            <span>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
  // return (
  //   <Container>
  //     <Wrapper>
  //       <Title>Create An Account</Title>
  //       <Form>
  //         <Input placeholder="first name" />
  //         <Input placeholder="last name" />
  //         <Input placeholder="username" />
  //         <Input placeholder="email" />
  //         <Input placeholder="password" />
  //         <Input placeholder="confirm password" />
  //         <Agreement>
  //           By creating an account, I consent to the processing of my personal
  //           data in accordance with the <b>PRIVACY POLICY</b>
  //         </Agreement>
  //         <Button>Create</Button>
  //       </Form>
  //     </Wrapper>
  //   </Container>
  // );
};

export default Register;
