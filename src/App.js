import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ButtonDemo from "./Components/Button";
function App() {
  const types = `@module("dashboard-components-library") @react.component
  external make: (  ~loadingText:string =?,
    ~buttonState:string =?,
    ~text:string =?,
    ~isSelectBoxButton:bool =?,
    ~buttonType:string =?,
    ~btnBgVariant:string =?,
    ~isDropdownOpen:bool =?,
    ~buttonVariant:string =?,
    ~buttonSize:string =?,
    ~leftIcon: React.element=?,
    ~rightIcon: React.element=?,
    ~type_:string =?,
    ~flattenBottom:bool =?,
    ~flattenTop:bool =?,
    ~onEnterPress:bool =?,
    ~onClick:(ReactEvent.Mouse.t => unit)=?,
    ~allowButtonTextMinWidth:bool =?,
    ~badge:Js.Json.t=?,
    ~ellipsisOnly:bool =?,
    ~isPhoneDropdown:bool =?,) => React.element = "Button"`;

  const reactSnippet = `import React from 'react';

  import { Button } from 'dashboard-components-library';
  
  const ButtonDemo = () => {
      return (
          <div className="flex flex-col gap-12 p-10 w-fit">

              <Button text="Primary Button Type" buttonType="Primary"> </Button>

              <Button text="Secondary Button Type" buttonType="Secondary"> </Button>

              <Button text="Success Button Type" buttonType="Success"> </Button>

              <Button text="Destructive Button Type" buttonType="Delete"> </Button>

          </div>
      );
  };
  
  export default ButtonDemo;`;

  return (

    <div className="grid grid-rows-5 gap-12 p-12 bg-slate-50">

      <div className="flex items-center justify-center">
        <ButtonDemo />
      </div>

      <div className="grid grid-cols-2 row-span-3 gap-12">

        <div>
          <div className="flex justify-between px-6 py-4 text-white bg-slate-600 items-center text-lg rounded-t-md">
            <p>Type Snippet for Typescript Users</p>
          </div>
          <SyntaxHighlighter language="javascript" style={dracula} customStyle={{
            padding: "32px",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
            wrapLines={true}
          >
            {types}
          </SyntaxHighlighter>
        </div>

        <div>
          <div className="flex justify-between px-6 py-4 text-white bg-slate-600 items-center text-lg rounded-t-md overflow-hidden">
            <p>Snippet for React Users</p>
          </div>
          <SyntaxHighlighter language="javascript" style={dracula} customStyle={{
            padding: "32px",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px"
          }}
          >
            {reactSnippet}
          </SyntaxHighlighter>
        </div>
      </div>

    </div>
  );
}

export default App;
