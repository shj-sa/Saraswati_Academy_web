/*
Note: To Add more Questions and Answers follow the following architecture:

const faqs = [
  {
    question: "",
    answer: "",
  },<- this comma
  {
    question: "",
    answer: "",
  },<-
];
always add a comma at the end of the last object

also { question:"....",answer:"...."} is the object

one more thing for adding a new line in the answer use \n in between
example: answer:"Yes,\n we can reschedule the classes"
it means 

    Yes,
    we can reschedule the classes
*/

const faqs = [
  {
    question:
      "How do I go about it, if I want to enroll my child and want classes at a certain day or time only?",
    answer:
      "Any discussion related to date or time slots is to be had with the teacher we connect with you. Post the free-demo session/class, once the teacher is Okayed by you, we make a WhatsApp group between us, you and the teacher. In this WhatsApp group, you can negotiate the class schedule as per yours and teacher’s availability.",
  },
  {
    question:
      "How do I pay the fees? And what is the payment schedule (monthly or class-wise)?",
    answer:
      "Payments are to be made through online transfer only. Your child’s teacher will share a class tracker at end of the month, as per which you can clear the fees latest by 10th day of the following month. Our fee cycle is post monthly. Bank details for online will be shared once you enroll the child with us.",
  },
  {
    question:
      "In case the child misses his or her class, will there be make up classes? In case we go for holidays et al.",
    answer:
      "We can reschedule the classes in case of emergencies; however, we request parents to avoid rescheduling as much as possible. If you're going for once a week class, we request you to take at least 4 classes a month, and 7-8 classes at least if you’re going for twice a week.",
  },
  {
    question: "Which online platform do you use?",
    answer:
      "We use Google Meet, Zoom or Skype as per your convenience and choice.",
  },
  {
    question: "Will the teacher help in Hindi school homework as well?",
    answer:
      "Yes, if you send school homework to the teacher and give the required instructions, she will definitely help the child with it.",
  },
  {
    question:
      "Can my child send Compos for marking to the teacher what he writes on his own as practice compos over weekends?",
    answer:
      "You can send the composition written by your child on the WhatsApp group created. But we encourage that the marking be done by the teacher face to face during a class to help the child understand mistakes and scope for improvement.",
  },
  {
    question: "All material will be provided by us?",
    answer:
      "We make a lot of personalized material and booklets based on the grade and level of child. However, if there is some specific material you want to be used that is not available with us, we request you to share it with the teacher.",
  },
  {
    question:
      "If we want more emphasis on any particular section or paper can we tell the teacher? Will she be able to accommodate?",
    answer:
      "Our teachers design the classes depending on our analysis of improvement and focus areas for the child after taking in parent’s view as well. So certainly, if you wish that the teacher focuses on a certain paper or section more, you can let her know in advance.",
  },
  {
    question: "Will there be any practice tests taken as well?",
    answer:
      "Yes, we conduct practice tests and assessments regularly based on the need and requirements of the child. So, while teachers plan and execute their own personal assessment for their students, we also conduct various sessions at organization level prior to school exam/assessment time.",
  },
  {
    question: "How will you communicate on progress of the child with us?",
    answer:
      "We as an organization follow a very interactive and cohesive model in which the teachers are required to conduct Parent Teacher Meetings every month to share progress of the child and any other related aspect as well that you should know about, on behalf of the organization.",
  },
  {
    question:
      "In case we are not able to manage time for tuition, is there a provision of class cancellation?",
    answer:
      "As mentioned above, although our model is very flexible and accommodating, we do not encourage any last-minute class cancellations. You can always reschedule the class after discussing with the teacher basis their availability.",
  },
  {
    question:
      "In case my child is not able to follow the teaching method or is uncomfortable with the current teacher, can we ask for a change?",
    answer:
      "In case your child is not able to follow the teacher or the teacher is unable to adhere to a mutually agreed methodology, we can consider changing the teacher. However, we can only do it max 3 times; which means you can get 2 more demo sessions from us (excluding the first demo).",
  },
  {
    question:
      "How can we reach out to the person-in-charge for any other queries, questions or suggestions?",
    answer:
      "There are two ways available:\n1. You can reach out to your child’s teacher in the common WhatsApp group regarding any questions.\n2. You can reach out to our Founder and CEO, Ms. Priyanka Mishra on her mobile anytime between 10.00 am SGT – 9.30 pm SGT.",
  },
  {
    question:
      "How do we get updates on all the information being shared by the organization?",
    answer:
      "Apart from the personalized WhatsApp group that we make for conducting the classes, we also add you to an exclusive Parent WhatsApp group where we provide all other information related to materials, classes, exams and curriculum related info etc.",
  },
];

export default faqs;
