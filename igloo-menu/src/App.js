import Dropdown from '@igloo-ui/dropdown';
import Button from '@igloo-ui/button';
import React from 'react';
import './App.css';
import Checkbox from '@igloo-ui/checkbox';
import r2wc from "@r2wc/react-to-web-component";

function App() {
  const [show, setShow] = React.useState(false);

  function List({ items }) {
    const listItem = items.map((item, key) => (
      <li key={`list-item_${key}`}>{item}</li>
    ));
    return <ul>{listItem}</ul>;
  }

  return (
    <><Checkbox htmlFor="checkbox-id">Label</Checkbox>
    <Dropdown
      isOpen={show} onClose={() => setShow(false)}
      content={<List items={['Organization details', 'Billing', 'Permissions', 'Segments']} />}>
      <Button
        appearance="secondary"
        onClick={() => setShow(!show)}
        size="small"
      >
        Settings
      </Button>
    </Dropdown></>
  );
}


 const IglooMenu = r2wc(App)

customElements.define("igloo-menu", IglooMenu)

export default App;
