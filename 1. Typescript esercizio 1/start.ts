// Dichiarazioni enum per più possibilità
enum Role {STAFF='staff',STUDENT='student',MANAGER='manager',ADMIN='admin'};
enum Gender {MALE='male',FEMALE='female',OTHER='other'};

const obj: obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.STAFF, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
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
	],
    gender: Gender.MALE // Generi possibili: 'male', 'female', 'other'
}


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

interface obj {
    id: number,
    name: string,
    surname:string,
    age:number,
    dateOfBirth: string,
    address?: Address,
    role: Role,
    username: string,
    profilePhotoUrl: string;
    companies:Company[];
    gender: Gender
}