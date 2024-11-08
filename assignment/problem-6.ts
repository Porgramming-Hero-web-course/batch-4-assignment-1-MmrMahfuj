
interface Profile {
    name: string;
    age: number;
    email: string;
};

type UpdateProfile = (profile: Profile, updateProfile: Partial<Profile>)=> Profile;

const updateProfile: UpdateProfile = (profile, updates) => {
    return {
        ...profile,
        ...updates
    };
};

const myProfile = {name: "alice", age: 25, email:"alice@gmail.com"};
console.log(updateProfile(myProfile, {age: 26}));