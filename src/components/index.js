// Let's make importing multiple components a little nicer by importing them all into this file and exporting them as an object
import Ground from './scenery/Ground';
import Info from './info/Info';
import Title from './general/Title';
import Action from './general/Action';
import Round from './general/Round';
import Block from './general/blocks/Block';
import CPUChoice from './general/CPUChoice';
import Victory from './general/Victory';

export {
    Ground,
    Info,
    Title,
    Action,
    Round,
    Block,
    CPUChoice,
    Victory
}