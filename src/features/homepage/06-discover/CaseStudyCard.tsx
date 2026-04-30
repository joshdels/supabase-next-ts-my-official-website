type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
  is_highlight?: boolean;
  tags: string[];
  created_at: string;
};

export default function CaseStudyCard({
  title,
  description,
  image,
  tags,
  created_at,
}: CaseStudyCardProps) {
  return (
    <>
      <div></div>
    </>
  );
}
