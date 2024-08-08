const heading =  React.createElement("h1",{id:"heading"},"GoodBye World!");

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]
    )
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);