<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="invoice-content">
      <h1>New Invoice</h1>

      <!-- Bill From -->
      <section class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            required
            type="text"
            id="billerStreetAddress"
            v-model="billerStreetAddress"
          />
        </div>
        <article class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input required type="text" id="billerCity" v-model="billerCity" />
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              required
              type="text"
              id="billerZipCode"
              v-model="billerZipCode"
            />
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              required
              type="text"
              id="billerCountry"
              v-model="billerCountry"
            />
          </div>
        </article>
      </section>

      <!-- Bill To -->
      <section class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input required type="text" id="clientName" v-model="clientName" />
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input required type="text" id="clientEmail" v-model="clientEmail" />
        </div>
        <div class="input flex flex-column">
          <label for="clientAddress">Street Address</label>
          <input
            required
            type="text"
            id="clientAddress"
            v-model="clientAddress"
          />
        </div>
        <article class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input required type="text" id="clientCity" v-model="clientCity" />
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">ZipCode</label>
            <input
              required
              type="text"
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              required
              type="text"
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </article>
      </section>

      <!-- Invoice Work Details -->
      <section class="invoice-work flex flex-column">
        <article class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input
              disabled
              type="text"
              id="invoiceDate"
              v-model="invoiceDate"
            />
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Payment Due</label>
            <input
              disabled
              type="text"
              id="paymentDueDate"
              v-model="paymentDueDate"
            />
          </div>
        </article>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select required id="paymentTerms" v-model="paymentTerms">
            <option value="30">Next 30 Days</option>
            <option value="60">Next 60 Days</option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input
            required
            type="text"
            id="productDescription"
            v-model="productDescription"
          />
        </div>
        <article class="work-items">
          <h3>Item List</h3>
          <table></table>

          <div @click="addNewInvoiceItem" class="flex button">
            <img src="@/assets/icon-plus.svg" alt="" />
            Add New Item
          </div>
        </article>
      </section>

      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button @click="closeInvoice" class="red">Cancle</button>
        </div>
        <div class="right flex">
          <button @click="saveDraft" class="dark-purple">Save Draft</button>
          <button @click="publishInvoice" class="purple">Create Invoice</button>
          <button class="purple">Update Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "invoiceMoald",
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    closeInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    left: 90px;
  }
}

.invoice-content {
  position: relative;
  padding: 56px;
  max-width: 700px;
  width: 100%;
  background-color: $BACKGROUND_COLOR;
  color: $WHITE;
  box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  h1 {
    margin-bottom: 48px;
    color: $WHITE;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    color: $WHITE;
  }

  h4 {
    margin-bottom: 24px;
    font-size: 12px;
    color: $BRANDING_COLOR;
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: $WHITE;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

// Bill To / Bill From
.bill-to,
.bill-from {
  margin-bottom: 48px;

  .location-details {
    gap: 16px;
    div {
      flex: 1;
    }
  }
}

// Invoice Work
.invoice-work {
  .payment {
    gap: 16px;
    div {
      flex: 1;
    }
  }

  .work-items {
    .item-list {
      width: 100%;
    }

    .button {
      color: $WHITE;
      background-color: #252945;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        margin-right: 4px;
      }
    }
  }
}

.save {
  margin-top: 60px;
  align-items: center;
  justify-content: space-between;
}
</style>
