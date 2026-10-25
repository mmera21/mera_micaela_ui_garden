import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableFooter from './components/TableFooter';

const sampleImg =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#4f8ef7"/><stop offset="1" stop-color="#7b3fe4"/>' +
      '</linearGradient></defs>' +
      '<rect width="1200" height="400" fill="url(#g)"/>' +
      '</svg>'
  );

const options = [
  { value: 'one', label: 'Option 1' },
  { value: 'two', label: 'Option 2' },
  { value: 'three', label: 'Option 3' },
];

const section: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  alignItems: 'center',
  marginBottom: '2rem',
};

function Showcase({ disabled }: { disabled: boolean }) {
  return (
    <div>
      <h2>{disabled ? 'Disabled state' : 'Default state'}</h2>

      <HeroImage
        src={sampleImg}
        title="Welcome"
        subtitle="My component library"
        disabled={disabled}
      />

      <div style={{ ...section, marginTop: '1.5rem' }}>
        <Button label="Button" disabled={disabled} />
        <Label text="Label" disabled={disabled} />
        <Text text="This is an example text." disabled={disabled} />
        <Dropdown options={options} label="Select" disabled={disabled} />
        <RadioButton label="Option A" disabled={disabled} />
      </div>

      <div style={section}>
        <Img src={sampleImg} alt="Example image" disabled={disabled} />
        <Card
          title="Card title"
          description="This is an example description."
          disabled={disabled}
        />
      </div>

      <Table disabled={disabled}>
        <TableHeader columns={['Name', 'Age', 'City']} disabled={disabled} />
        <tbody>
          <TableRow disabled={disabled}>
            <TableCell disabled={disabled}>Ana</TableCell>
            <TableCell disabled={disabled}>28</TableCell>
            <TableCell disabled={disabled}>Winnipeg</TableCell>
          </TableRow>
          <TableRow disabled={disabled}>
            <TableCell disabled={disabled}>Luis</TableCell>
            <TableCell disabled={disabled}>34</TableCell>
            <TableCell disabled={disabled}>Toronto</TableCell>
          </TableRow>
        </tbody>
        <TableFooter text="Total: 2 people" colSpan={3} disabled={disabled} />
      </Table>
    </div>
  );
}

function App() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '1rem' }}>
      <h1>Component Library</h1>
      <Showcase disabled={false} />
      <hr style={{ margin: '2rem 0' }} />
      <Showcase disabled={true} />
    </div>
  );
}

export default App;