import { useForm, isEmail, hasLength, isNotEmpty} from '@mantine/form';
import { Button, TextInput, Select, Input, MantineProvider, Radio } from '@mantine/core';
import { useId } from '@mantine/hooks';
import InputMask from 'react-input-mask';
import { DatePicker } from '@mantine/dates';
import { IconChevronDown, IconAt, IconPhone, IconCalendar, IconIdBadge2, IconZip, IconWorld } from "@tabler/icons";
import './register.css';

export default function Register() {
  const id = useId();
  const form = useForm({
    initialValues: {
      name: '',
      dob: null,
      email: '',
      city: null
    },

    validate: {
      name: hasLength({ min: 2, max: 15 }, 'First name must be 2-15 characters long'),
      dob: isNotEmpty('Select date of birth'),
      email: isEmail('Invalid email'),
      city: isNotEmpty('Select a city')
      
    },
  });

//   let back = "< Back";
  return (
    <div className="reg">
		
		<div className="registration-container">
		  <header>
			<div className="nav">
			<div className="pagetitle">
				  <h1>Registration Form</h1>
			</div>
		  </div>
		  </header>
		  <section className="form-container">
			<form className="form" onSubmit={form.onSubmit(console.log)} >
			<MantineProvider
				inherit
				theme={{
					components: {
					InputWrapper: {
						styles: (theme) => ({
						label: {
							color: '#FFF',
						},
						}),
					},

					Input: {
						styles: (theme) => ({
						input: { borderColor: theme.colors.violet[theme.fn.primaryShade()] },
						}),
					},
					},
				}}
			>
				<span className='names'>
			  <TextInput
				label="First Name"
				icon={<IconIdBadge2 />}
				placeholder="first name"
				{...form.getInputProps("name")}
				withAsterisk
				mt={10}
			  />
			  
			  <TextInput
				label="Last Name "
				icon={<IconIdBadge2 />}
				placeholder="last name"
				mt={10}
			  />
			</span>
			  <DatePicker
				label="Date of Birth"
				placeholder="pick date"
				icon={<IconCalendar />}
				{...form.getInputProps("dob")}
				withAsterisk
				mt={10}
			  />

				<Radio.Group
					className="radio"
				  name="favoriteFramework"
				  label="Gender"
				  {...form.getInputProps("gender")}
				  withAsterisk
				  
				>
			  <Radio value="m"/>Male
			  <Radio className='frad' value="f"/>Female
				</Radio.Group>

				
			  <Input.Wrapper
			   id={id}
			   label="Phone Number"
			   required
			   mt={10}
			  >
			  <Input component={InputMask} mask="+251 (99) 999 9999" id={id} 
				icon={<IconPhone />}
				placeholder="phone number" 
				{...form.getInputProps("pno")}/>
			  </Input.Wrapper>

			  <TextInput
				label="E-mail"
				icon={<IconAt />}
				placeholder="email"
				{...form.getInputProps('email')}
				mt={10}
			   />

			   <Select
				label="City"
				placeholder="select a city"
				icon={<IconWorld />}
				data={[
					"Adama", "Addis Ababa", "Afar", "Arba Minch", "Axum", "Bahir Dar", "Bale Robe", "Borena", "Chiro", "Debre Birhan", "Debre Zeit", "Dessie", "Dire Dawa",
					"Harrar", "Hawassa", "Jigjiga", "Jimma", "Kemissie", "Lalibela", "Mekelle", "Weldia", "Yirgalem"
				]}
				rightSection={<IconChevronDown size={14} />}
				rightSectionWidth={40}
				{...form.getInputProps("city")}
				withAsterisk
				mt={10}
			  />
			  
			</MantineProvider>

			  <Button type="submit" mt={20} sx={{ backgroundColor: '#6C63FF', fontSize: 18, marginLeft: 505}}>
				Register
			  </Button>
			</form>
		  </section>
		</div>
	</div>	
  );
}
