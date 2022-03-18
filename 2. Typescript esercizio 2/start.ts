// Dichiarazioni enum per più possibilità
enum Roles {staff,student,manager,admin};
enum Genders {male,female,other};

interface Address {
    city: string,
    street: string,
    postalCode: string
}

interface Company {
    id: number;
    name: string;
    description: string;
    location: Address;
}

interface Obj {
    id: number,
    name: string,
    surname:string,
    age:number,
    dateOfBirth: string,
    address?: Address,
    role: Roles,
    username: string,
    profilePhotoUrl: string;
    companies:Company[];
    gender: Genders
}

class User implements Obj {
    id: 3487
    name: 'Mario'
    surname: 'Rossi'
    age: 25
    dateOfBirth: '1995-14-12'
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    }
    role: Roles.staff // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80'
    profilePhotoUrl: 'https://bit.ly/3yRngEP'
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	]
    gender: Genders.male // Generi possibili: 'male', 'female', 'other'
    
    constructor(name, surname) {
        this.name=name;
        this.surname=surname;
    }

    fullName(name, surname): string {
        return name+ " " +  surname;
    }
}
