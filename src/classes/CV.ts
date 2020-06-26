import { Section } from '@/classes/Section';

export class CV {   
    public readonly sections: Array<Section> = [];
    public readonly personal: Array<Section> = [];

    public company = "(Wstaw nazwę firmy)";
    public person = "(Imię Nazwisko)";

    public showFooter = true;
}