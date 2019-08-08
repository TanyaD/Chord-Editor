import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import ChordEditor from './ChordEditor';

describe('<ChordEditor />', () => {
    it('renders an editor area', () => {
        const editor = shallow(<ChordEditor />);
        expect(editor.find('textarea').length).toEqual(1);
    });

    it('renders an output area', () => {
        const editor = shallow(<ChordEditor />);
        expect(editor.find('div.chord-output').length).toEqual(1);
    });

    it('renders the chord chart output', () => {
        const editor = shallow(<ChordEditor />);
        const expectedOutput = 
        '<table>' + 
        '<tr>'+
        '<td class="chord"></td>' +
        '</tr>'+
        '<tr>'+
        '<td class="lyrics">Type some lyrics here&nbsp;</td>' +
        '</tr>'+
        '</table>';

        const realOutput = editor.find('div.chord-output').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

    it('renders the chord chart input/output', () => {
        const editor = shallow(<ChordEditor />);
        const expectedOutput = 
        '<table>' + 
        '<tr>'+
        '<td class="chord">B</td>' +
        '<td class="chord">Am</td>' +
        '</tr>'+
        '<tr>'+
        '<td class="lyrics">New&nbsp;</td>' +
        '<td class="lyrics">Lyrics&nbsp;</td>' +
        '</tr>'+
        '</table>';

        editor.setState({value: "[B]New [Am]Lyrics"})

        const realOutput = editor.find('div.chord-output').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
});
//Jest as a test runner, provides us with describe, it expect and toEqual()
//Enzyme for shallow which returns shallow wrapper which gives us some of the methods that we need: find, html()
