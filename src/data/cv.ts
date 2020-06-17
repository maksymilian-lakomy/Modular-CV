import { CV } from '@/classes/CV';
import { Section } from '@/classes/Section';
import { ProjectEntry } from '@/classes/ProjectEntry';
import { SkillEntry } from '@/classes/SkillEntry';
import { DefaultEntry } from '@/classes/DefaultEntry';
import { EducationEntry } from '@/classes/EducationEntry';

import InlineSection from '@/components/InlineSection.vue';

import Technologies from './technologies';
import { Link } from '@/classes/Link';
import Sources from '@/classes/Sources';

const cv = new CV();

const projectsSection = new Section('Projekty Webowe');

projectsSection.entries.push(new ProjectEntry('Dungeons Inside', [Technologies.ThreeJs, Technologies.VueJs, Technologies.VueJsRouter, Technologies.Vuex, Technologies.TypeScript],
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>`));

projectsSection.entries.push(new ProjectEntry('Pokédex', [Technologies.VueJs, Technologies.VueJsRouter, Technologies.TypeScript],
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>`, 
    [new Link('https://github.com/maksymilian-lakomy/allegro-pokedex', Sources.GitHub)]),
);

projectsSection.entries.push(new ProjectEntry('Modularne CV', [Technologies.VueJs, Technologies.TypeScript],
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>`));

projectsSection.entries.push(new ProjectEntry('Biedaflix', [Technologies.VueJs, Technologies.VueJsRouter, Technologies.Vuex, Technologies.JavaScript],
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>`));

projectsSection.entries.push(new ProjectEntry(`Don't Starve Bootleg`, [Technologies.csharp, Technologies.unity],
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>`));

const skillsSection = new Section('Tech stack', InlineSection);

skillsSection.entries.push(new SkillEntry('Vue.js', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. `));

skillsSection.entries.push(new SkillEntry('TypeScript', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis.`));

skillsSection.entries.push(new SkillEntry('JavaScript', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis.`));

skillsSection.entries.push(new SkillEntry('CSS', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis.`));

skillsSection.entries.push(new SkillEntry('HTML', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis.`));

const educationSection = new Section('Edukacja');

educationSection.entries.push(new EducationEntry('Uniwersytet im. Adama Mickiewicza', 'Studia inżynierskie, Informatyka', new Date('2018'), null));

cv.sections.push(projectsSection, skillsSection, educationSection);

// PERSONAL

const aboutMePersonalSection = new Section('O mnie');

aboutMePersonalSection.entries.push(new DefaultEntry('Tudu?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ac dolor et mattis. Nam laoreet nec velit at luctus. Donec ac nisi turpis. <p>Morbi massa risus, consequat vitae odio a, vulputate convallis augue. Duis eget lacus blandit velit lacinia fringilla eget sed urna. Duis bibendum a tellus et pharetra.</p>'));

const contantPersonalSection = new Section('Kontakt');

const socialMediaPersonalSection = new Section('Tu jestem');


cv.personal.push(aboutMePersonalSection, socialMediaPersonalSection, contantPersonalSection);

export default cv;