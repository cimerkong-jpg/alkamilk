import { useState } from 'react';
import type { FormEvent } from 'react';
import { combos } from '../data';
import { getLandingVariant } from '../landingVariant';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const submitLead = async (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const response = await fetch('/lead-submit.php', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Submit failed');
  }
};

const StatusMessage = ({ state }: { state: SubmitState }) => {
  if (state === 'success') {
    return (
      <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
        Đã nhận thông tin. Nhân viên sẽ liên hệ tư vấn sớm.
      </p>
    );
  }

  if (state === 'error') {
    return (
      <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 ring-1 ring-red-100">
        Chưa gửi được form. Vui lòng kiểm tra hosting có hỗ trợ PHP hoặc thử lại.
      </p>
    );
  }

  return null;
};

const ConsultationForm = () => {
  const [state, setState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('submitting');

    try {
      await submitLead(event.currentTarget);
      event.currentTarget.reset();
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="lead-form" className="scroll-mt-20 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-red-50">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] bg-white p-5 shadow-[0_24px_70px_rgba(127,29,29,0.12)] ring-1 ring-red-100 md:p-7">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">Consultation form</p>
        <h2 className="text-2xl font-black text-gray-950 md:text-4xl">Đăng ký để nhân viên tư vấn</h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600 md:text-base">
          Điền tình trạng hiện tại và số điện thoại, team sẽ liên hệ lại để tư vấn cách dùng phù hợp.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <input type="hidden" name="form_type" value="consultation" />
          <input type="hidden" name="source" value={getLandingVariant()} />

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Tình trạng hiện tại của bạn</span>
            <textarea
              name="condition"
              required
              rows={4}
              placeholder="Ví dụ: đứng lâu đau gối, đau lưng, đi lại khó..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Số điện thoại</span>
            <input
              name="phone"
              required
              inputMode="tel"
              placeholder="Nhập số điện thoại để nhân viên liên hệ"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </label>

          <button
            type="submit"
            disabled={state === 'submitting'}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-5 text-base font-black text-white shadow-xl transition active:scale-[0.98] disabled:opacity-70"
          >
            {state === 'submitting' ? 'Đang gửi...' : 'Gửi thông tin tư vấn'}
          </button>
        </form>

        <StatusMessage state={state} />
      </div>
    </section>
  );
};

const OrderForm = () => {
  const [state, setState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('submitting');

    try {
      await submitLead(event.currentTarget);
      event.currentTarget.reset();
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="order-form" className="scroll-mt-20 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-red-50">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] bg-white p-5 shadow-[0_24px_70px_rgba(127,29,29,0.12)] ring-1 ring-red-100 md:p-7">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">Order form</p>
        <h2 className="text-2xl font-black text-gray-950 md:text-4xl">Đăng ký đặt combo AlkaMilk</h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600 md:text-base">
          Điền tình trạng, thông tin liên hệ và combo muốn mua. Nhân viên sẽ xác nhận lại trước khi giao.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 grid gap-4 md:grid-cols-2">
          <input type="hidden" name="form_type" value="order" />
          <input type="hidden" name="source" value={getLandingVariant()} />

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-black text-gray-900">Tình trạng hiện tại của bạn</span>
            <textarea
              name="condition"
              required
              rows={3}
              placeholder="Ví dụ: đau gối, đau lưng, đứng lâu mỏi..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Họ tên</span>
            <input name="name" required placeholder="Tên người nhận" className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Số điện thoại</span>
            <input name="phone" required inputMode="tel" placeholder="Số điện thoại" className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Combo muốn đặt</span>
            <select name="combo" required className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100">
              {combos.map((combo) => (
                <option key={combo.id} value={`Mua ${combo.buy} Tang ${combo.free}`}>
                  Mua {combo.buy} Tặng {combo.free} - nhận {combo.buy + combo.free} hộp
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Khu vực nhận hàng</span>
            <input name="area" required placeholder="Ví dụ: Đài Bắc, Đào Viên, Đài Trung..." className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-black text-gray-900">Địa chỉ / ghi chú thêm</span>
            <textarea name="note" rows={3} placeholder="Địa chỉ, thời gian nhận hàng, ghi chú..." className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <button
            type="submit"
            disabled={state === 'submitting'}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-5 text-base font-black text-white shadow-xl transition active:scale-[0.98] disabled:opacity-70 md:col-span-2"
          >
            {state === 'submitting' ? 'Đang gửi...' : 'Hoàn tất đăng ký đặt hàng'}
          </button>
        </form>

        <StatusMessage state={state} />
      </div>
    </section>
  );
};

const LeadForms = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') return <ConsultationForm />;
  if (variant === 'alkamilk-sale') return <OrderForm />;

  return null;
};

export default LeadForms;
