User.destroy_all
Crime.destroy_all

chris = User.create({name: "Chris", email: "456@gmail.com", password: "456"})

jill = User.create({name: "Jill", email: "467@gmail.com", password: "458"})


jayme = User.create({name: "Jayme", email: "467@gmail.com", password: "458"})

public_indecency = Crime.create({
    title: 'Public Indecency',
    description:'“Public indecency” generally refers to acts involving nudity or sexual activity in view of the public, often with the intent to shock, offend, or arouse. It includes criminal offenses like indecent exposure and lewd conduct.'
})

drug_and_alcohol = Crime.create({
    title: 'Drug and Alcohol',
    description: 'Crimes involving Alcohol and Drugs.'
})

other_crime = Crime.create({
    title: 'Other Crimes',
    description: 'All other suspicious activity and crimes for people to be aware of.'
})


#comments 

chris_comment = Comment.create({
    title: 'Drug deal on 8th St. NE 30309',
    description: 'There was a drug deal on 8th street between two guys on the first on October around 1pm',
    user_id: chris.id,
    crime_id: drug_and_alcohol.id

})

jayme_comment = Comment.create({
    title: 'Drug deal on 4th St. NE 30309',
    description: 'There was a drug deal on 8th street between two guys on the first on October around 1pm',
    user_id: jayme.id,
    crime_id: public_indecency.id

})
jill_comment = Comment.create({
    title: 'Drug deal on 3rd St. NE 30309',
    description: 'There was a drug deal on 8th street between two guys on the first on October around 1pm',
    user_id: jill.id,
    crime_id: other_crime.id

})
