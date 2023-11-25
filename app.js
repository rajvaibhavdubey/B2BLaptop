import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[817px] w-full items-stretch max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative bg-blue-900 bg-opacity-70 flex w-full flex-col pb-12 px-5 max-md:max-w-full">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 -mr-5 max-md:max-w-full max-md:flex-wrap">
            <div className="flex-col text-blue-900 text-2xl font-bold leading-9 relative fill-white overflow-hidden aspect-[2.4427480916030535] grow pl-12 pr-5 py-10 max-md:pl-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9421b1e-57c2-4da1-8baf-7d5f1a8b5966?"
                className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
              />
              B2B LAPTOP
              <br />
              DISTRIBUTION
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52980941-63ed-4f73-b425-054d40893260?"
              className="aspect-[1.72] object-contain object-center w-full shadow-2xl overflow-hidden grow basis-[0%]"
            />
          </div>
          <div className="text-white text-center text-6xl font-extrabold leading-[96px] self-center whitespace-nowrap mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-[66px] max-md:mt-10">
            Expert IT Solutions Tailored For You!
          </div>
          <div className="text-white text-center text-3xl italic font-semibold leading-10 self-center whitespace-nowrap mt-8 max-md:max-w-full">
            The top wholesaler of laptops in India.
          </div>
          <div className="self-center flex w-[488px] max-w-full items-stretch justify-between gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
            <div className="bg-white flex items-stretch justify-between gap-3.5 px-10 py-6 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac68011-c180-4597-aa25-c16eeaf0ff39?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-blue-900 text-lg font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                Contact Us
              </div>
            </div>
            <div className="border flex items-stretch justify-between gap-3.5 px-8 py-6 border-solid border-white max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4a9326-ae93-4e1c-85a9-1fde810b99e5?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-lg font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                Our Services
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fabe8a69-bb57-4bd6-9416-558e4a034141?"
            className="aspect-[2.95] object-contain object-center w-[124px] overflow-hidden self-center max-w-full mt-40 mb-3 max-md:mt-10"
          />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1400px] flex-col items-stretch mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="text-blue-900 text-2xl font-medium leading-9 whitespace-nowrap -mr-5 max-md:max-w-full">
          Who Are We?
        </div>
        <div className="text-neutral-800 text-6xl font-extrabold leading-[66px] -mr-5 mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Delivering Exceptional
          <br />
          Quality Services
        </div>
        <div className="-mr-5 mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <div className="flex-col text-white text-xl font-medium leading-8 relative whitespace-nowrap overflow-hidden min-h-[409px] mr-0 pl-5 pr-2.5 pt-96 pb-6 max-md:max-w-full max-md:pt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                People
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-2.5 max-md:max-w-full">
                <div className="flex w-[488px] max-w-full flex-col items-stretch mr-10 max-md:mr-2.5">
                  <div className="text-zinc-700 text-2xl font-medium leading-9 max-md:max-w-full">
                    Our strong sense of support with client means that we are
                    constantly striving to provide solutions, even for issues
                    they aren’t yet aware of.
                    <br />
                  </div>
                  <div className="text-blue-900 text-2xl font-semibold leading-9 underline whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
                    Know More
                  </div>
                </div>
                <div className="bg-blue-900 bg-opacity-90 self-stretch flex items-start justify-between gap-5 mt-24 pl-9 pr-10 py-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:px-5">
                  <div className="text-white text-5xl font-bold leading-[63px] mt-8">
                    200+
                  </div>
                  <div className="bg-white self-center w-px shrink-0 h-[76px] my-auto" />
                  <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5 self-start">
                    <div className="text-white text-xl font-medium leading-8 whitespace-nowrap">
                      World Offices
                    </div>
                    <div className="text-white text-5xl font-bold leading-[63px] whitespace-nowrap mt-3.5">
                      14
                    </div>
                  </div>
                  <div className="bg-white self-center w-px shrink-0 h-[76px] my-auto" />
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-white text-xl font-medium leading-8 whitespace-nowrap">
                      Headquarters
                    </div>
                    <div className="text-white text-5xl font-bold leading-[63px] whitespace-nowrap mt-2">
                      CA, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 self-stretch flex w-full flex-col items-center mt-28 px-5 py-12 max-md:max-w-full max-md:mt-10">
        <div className="w-full max-w-[1400px] mt-4 mb-3.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-2.5 max-md:max-w-full max-md:mt-10">
                <div className="text-blue-900 text-2xl font-medium leading-9 whitespace-nowrap max-md:max-w-full">
                  Why Choose Us?
                </div>
                <div className="text-blue-900 text-6xl font-extrabold leading-[66px] mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  <span className="text-neutral-800">
                    We Make our
                    <br />
                    Customer{" "}
                  </span>
                  <span className="text-blue-900">Heroes!</span>
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/636d6f5f-4cc8-43a4-a3c6-a6ae81cf015a?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-zinc-700 text-2xl font-medium leading-9 grow shrink basis-auto self-start max-md:max-w-full">
                    We say what we do and we do what we say.
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c44a0e05-9f27-456c-a186-1201ffa25464?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-zinc-700 text-2xl font-medium leading-9 grow shrink basis-auto max-md:max-w-full">
                    We are obsessed with timelines. If it is humanly possible,
                    consider it done.
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50ac496-7fba-42a4-a1de-495f02dbb81d?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-zinc-700 text-2xl font-medium leading-9 grow shrink basis-auto max-md:max-w-full">
                    Our response to situations is based on how our customers see
                    the problem.
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f19ce7e-fce5-4701-974d-edbedc857947?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-zinc-700 text-2xl font-medium leading-9 grow shrink basis-auto max-md:max-w-full">
                    We leave no stone unturned in the pursuit of customer
                    delight.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 bg-opacity-90 self-stretch flex w-full flex-col items-center px-5 py-12 max-md:max-w-full">
        <div className="text-white text-center text-3xl font-semibold leading-10 whitespace-nowrap mt-8 max-md:max-w-full">
          Trusted by 1,000+ Happy Customers
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-5 -mr-5 mt-16 mb-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[5.16] object-contain object-center w-[253px] overflow-hidden self-center my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[4.6] object-contain object-center w-[221px] overflow-hidden self-center my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[3.77] object-contain object-center w-[211px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[9.13] object-contain object-center w-[292px] overflow-hidden self-center my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[2.48] object-contain object-center w-44 overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[3.21] object-contain object-center w-[202px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
      <div className="text-blue-900 text-center text-2xl font-medium leading-9 self-center whitespace-nowrap mt-20 max-md:mt-10">
        Testimonials
      </div>
      <div className="text-neutral-800 text-center text-6xl font-extrabold leading-[66px] self-center whitespace-nowrap mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        What Our Clients Say
      </div>
      <div className="self-center flex w-full max-w-[1462px] items-stretch justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc864756-e9d0-4809-b9a2-30a961471237?"
          className="aspect-square object-contain object-center w-[62px] overflow-hidden shrink-0 max-w-full mt-28 self-end max-md:mt-10"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-square object-contain object-center w-[180px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc34507-9296-451b-b420-c656d0ccc329?"
          className="aspect-square object-contain object-center w-[62px] overflow-hidden shrink-0 max-w-full mt-28 self-end max-md:mt-10"
        />
      </div>
      <div className="text-zinc-700 text-center text-2xl font-medium leading-9 self-center max-w-[926px] mt-10 max-md:max-w-full">
        Its been 5+ years now and the consistent service and good relations hold
        us from looking out. We rely on the team for most of our hardware
        procurement and maintenance like laptops and desktops.
      </div>
      <div className="text-neutral-800 text-center text-3xl font-bold leading-10 self-center whitespace-nowrap mt-10 max-md:mt-10">
        Katy Pearson
      </div>
      <div className="text-neutral-500 text-center text-2xl italic font-medium leading-9 self-center whitespace-nowrap mt-2.5">
        Director, BSharp Corp.
      </div>
      <div className="bg-neutral-800 self-stretch flex w-full flex-col items-center mt-24 px-5 py-12 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full max-w-[1400px] flex-col items-stretch mt-7 mb-3.5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                <div className="text-white text-2xl font-bold leading-9 max-md:mt-10">
                  B2B LAPTOP
                  <br />
                  DISTRIBUTION
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap">
                    Headquarters
                  </div>
                  <div className="flex justify-between gap-4 mt-9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/853478ee-1d87-498e-812e-69d63b36a032?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-xl font-medium leading-8 grow shrink basis-auto">
                      51A, 2nd Street, 72nd Avenue,
                      <br />
                      San Francisco, CA, USA
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between gap-4 mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/84ea5bed-cb57-4e86-b136-13d7f6f03c8c?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-xl font-medium leading-8 grow whitespace-nowrap self-start">
                      10001-43718
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap">
                    Useful Links
                  </div>
                  <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-8">
                    About Us
                  </div>
                  <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-8">
                    Services
                  </div>
                  <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-8">
                    Contact Us
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[12%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap">
                    Follow Us
                  </div>
                  <div className="flex items-stretch justify-between gap-5 mt-9 max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd750c9e-6c84-4681-9789-dff01c5ad24c?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/988e2011-0f39-4f74-ab4e-b281f7d08524?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/78218ae5-6c92-4f95-af47-17cd144a6c08?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-sm italic leading-5 whitespace-nowrap mt-40 max-md:max-w-full max-md:mt-10">
            B2B Laptop Distribution @2023, All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}


