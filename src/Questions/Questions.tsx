import Questions from "/Questions.svg";

export default function QuestionsPage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${Questions})` }}
    >
    </div>
  );
}
