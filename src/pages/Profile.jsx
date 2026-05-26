import ellipseImage from "../assets/Ellipse.png";

export default function Profile() {
  return (
    <div className="h-full bg-[#f7f7f7] flex flex-col">
      <div
        className="bg-white px-5 pt-6 pb-5"
        style={{
          boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
        }}
      >
        <h1 className="text-[18px] font-medium text-[#1D2226]">
          Account Settings
        </h1>
      </div>

      <div className="px-5 pt-7">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={ellipseImage}
              alt="avatar"
              className="w-[72px] h-[72px] rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#6C25FF]
                            flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 fill-white"
              >
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[#1D2226]">
              Marry Doe
            </h2>

            <p className="text-[13px] text-[#6b6b6b] mt-1">
              MarryDoe@gmail.com
            </p>
          </div>
        </div>

        <p className="text-[13px] text-[#5f5f5f] leading-[22px] mt-7">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div
        className="mt-6"
        style={{
          borderTop: "1px dashed #cbcbcb",
        }}
      />

      <div className="flex-1" />

      <div
        style={{
          borderTop: "1px dashed #cbcbcb",
        }}
      />
    </div>
  );
}